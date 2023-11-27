import React, { useEffect, useState } from "react";
import Container from "../../../components/common/Container";
import { Alert, CardMedia, Grid, Paper } from "@mui/material";
import { useQuery } from "react-query";
import useAuthRedirect from "../../../hooks/redirect";
import { useJwt } from "../../../stores/jwt";
import { actualizarProveedor, getProveedor } from "../api/perfilApi";
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

function Perfil(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [alerta, setAlerta] = useState({
    edit: false,
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

  const updateForm = useForm({
    defaultValues: actualizarProveedorDefaultValues,
    resolver: zodResolver(actualizarProveedorSchema),
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
            }}
          >
            <CardMedia
              sx={{ height: 240, width: 240, borderRadius: "50%" }}
              image={"https://picsum.photos/200/300"}
              title={"logo"}
            />
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

          {/* Agrega otros elementos aquí si es necesario */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Perfil;
