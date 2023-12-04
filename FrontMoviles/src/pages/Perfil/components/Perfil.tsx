import React, { useEffect, useState } from "react";
import Container from "../../../components/common/Container";
import { Alert, Box, Button, CardMedia, Grid, Paper } from "@mui/material";
import { useQuery } from "react-query";
import useAuthRedirect from "../../../hooks/redirect";
import { useJwt } from "../../../stores/jwt";
import {
  actualizarProveedor,
  getProveedor,
  imagenProveedor,
} from "../api/perfilApi";
import { Proveedor } from "../types/proveedorTypes";
import { useForm } from "react-hook-form";
import {
  actualizarProveedorDefaultValues,
  actualizarProveedorSchema,
} from "../validation/actualizarProveedor";
import { zodResolver } from "@hookform/resolvers/zod";
import PerfilUpdateForm from "./PerfilUpdateForm";
import { mutationFood } from "../../../api/mutation";
import { ScrollToTop } from "../../../utils/ScrollToTop";
import Modal from "../../../components/common/Modal";
import {
  imageProveedorDefaultValues,
  imageProveedorSchema,
} from "../validation/imagenProveedor";
import PerfilImageForm from "./PerfilImageForm";

function Perfil(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [alerta, setAlerta] = useState({
    edit: false,
  });
  const [modals, setModals] = useState({
    image: false,
  });
  const productosQuery = useQuery({
    queryKey: ["proveedor", correo],
    queryFn: async () => {
      return await getProveedor(correo);
    },
    enabled: correo !== undefined && correo !== null,
  });
  const proveedor = productosQuery.data?.data ?? undefined;

  const crearProductoMutation = mutationFood(actualizarProveedor, "proveedor", {
    onSuccess: () => {
      setAlerta({ ...alerta, edit: true });
      ScrollToTop();
    },
  });
  const imageProveedorMutation = mutationFood(imagenProveedor, "proveedor", {
    onSuccess: () => {
      setAlerta({ ...alerta, edit: true });
      setModals({ ...modals, image: false });
      ScrollToTop();
    },
  });

  const updateForm = useForm({
    defaultValues: actualizarProveedorDefaultValues,
    resolver: zodResolver(actualizarProveedorSchema),
  });
  const imageForm = useForm({
    defaultValues: imageProveedorDefaultValues,
    resolver: zodResolver(imageProveedorSchema),
  });

  function onPerfil(proveedor: Proveedor) {
    console.log(proveedor);
    updateForm.setValue("name", proveedor.nombre);
    updateForm.setValue("cellphone", proveedor.telefono);
    updateForm.setValue("address", proveedor.direccion);
    updateForm.setValue("city", proveedor.ciudad);
    updateForm.setValue("cp", proveedor.codigoPostal);
    updateForm.setValue("state", proveedor.estado);
    updateForm.setValue("latitud", proveedor.coordY);
    updateForm.setValue("longitud", proveedor.coordX);
  }

  useEffect(() => {
    if (proveedor !== undefined) {
      onPerfil(proveedor);
    }
  }, [proveedor]);
  return (
    <>
      {proveedor !== undefined && (
        <>
          <Modal
            open={modals.image}
            title="Actualizar Imagen"
            size="sm"
            onClose={() => setModals({ ...modals, image: false })}
            onSave={() => {
              imageForm.handleSubmit((data) => {
                console.log(data);
                imageProveedorMutation.mutate({
                  image: data.image,
                });
              })();
            }}
          >
            <PerfilImageForm form={imageForm} />
          </Modal>
          <Container>
            {alerta.edit && (
              <Alert
                onClose={() => {
                  setAlerta({ ...alerta, edit: false });
                }}
              >
                Datos Actualizados Con Exito
              </Alert>
            )}
            <Grid container sx={{ padding: 5 }} spacing={5}>
              <Grid item xs={4}>
                <Paper
                  elevation={5}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingY: 5,
                    flexDirection: "column",
                  }}
                >
                  <Box
                    component={"img"}
                    sx={{ height: 240, width: 240, borderRadius: "50%" }}
                    src={
                      proveedor.profilePic === "algo/Ruta" ||
                      proveedor.profilePic === "" ||
                      proveedor.profilePic === null ||
                      proveedor.profilePic === undefined
                        ? "https://picsum.photos/200/300"
                        : `http://localhost:3000${proveedor.profilePic}`
                    }
                    crossOrigin="anonymous"
                  />
                  <Button
                    sx={{
                      backgroundColor: "#EF2F29",
                      paddingY: 1.5,
                      borderRadius: 5,
                      marginTop: 3,
                      "&:hover": {
                        backgroundColor: "#801512",
                      },
                    }}
                    onClick={() => setModals({ ...modals, image: true })}
                    variant="contained"
                  >
                    Actualizar Imagen
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={8} sx={{ textAlign: "center" }}>
                <Paper
                  elevation={5}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    padding: 3,
                  }}
                >
                  <PerfilUpdateForm
                    form={updateForm}
                    onsubmitForm={() => {
                      updateForm.handleSubmit((data) => {
                        crearProductoMutation.mutate({
                          nombre: data.name,
                          telefono: data.cellphone,
                          direccion: data.address,
                          ciudad: data.city,
                          codigoPostal: data.cp,
                          estado: data.state,
                          coordY: data.latitud,
                          coordX: data.longitud,
                        });
                      })();
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default Perfil;
