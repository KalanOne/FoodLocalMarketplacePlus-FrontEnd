import React, { useEffect, useState } from "react";
import useAuthRedirect from "../../../hooks/redirect";
import Container from "../../../components/common/Container";
import { Alert, Grid, Typography } from "@mui/material";
import ProductCard from "../../../components/common/ProductCard";
import { AddFab } from "../../../components/common/AddFab";
import Modal from "../../../components/common/Modal";
import { useJwt } from "../../../stores/jwt";
import {
  crearProductoDefaultValues,
  crearProductoSchema,
} from "../validation/crearProductos";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CrearProductoForm from "./ProductosCrearForm";
import {
  actualizarImagenProductos,
  actualizarProductos,
  categoriaProducto,
  crearProducto,
  eliminarProductos,
  getProductos,
} from "../api/productosApi";
import { mutationFood } from "../../../api/mutation";
import { useQuery } from "react-query";
import {
  actualizarProductoDefaultValues,
  actualizarProductoSchema,
} from "../validation/updateProducto";
import ActualizarProductoForm from "./ProductoActualizarForm";
import { Producto } from "../types/productosTypes";
import { ScrollToTop } from "../../../utils/ScrollToTop";
import HomeImage from "../../../assets/HomeImage.png";

function Productos(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [currentProduct, setCurrentProduct] = useState<Producto>();
  const [currentDelete, setCurrentDelete] = useState<Producto>();
  const [alerta, setAlerta] = useState({
    add: false,
    edit: false,
    delete: false,
  });
  const [modals, setModals] = useState({
    add: false,
    edit: false,
    delete: false,
  });

  const productosQuery = useQuery({
    queryKey: ["productos", correo],
    queryFn: async () => {
      return await getProductos(correo);
    },
    enabled: correo !== undefined && correo !== null,
  });
  const productos = productosQuery.data?.data ?? [];

  const categoriasProductosQuery = useQuery({
    queryKey: ["categorias"],
    queryFn: async () => {
      return await categoriaProducto();
    },
  });
  const categorias = categoriasProductosQuery.data?.data ?? [];

  const crearProductoMutation = mutationFood(crearProducto, "productos", {
    onSuccess: () => {
      setAlerta({ ...alerta, add: true });
      setModals({ ...modals, add: false });
      ScrollToTop();
    },
  });
  const actualizarProductoMutation = mutationFood(
    actualizarProductos,
    "productos",
    {
      onSuccess: () => {
        setAlerta({ ...alerta, edit: true });
        setModals({ ...modals, edit: false });
        setCurrentProduct(undefined);
        ScrollToTop();
      },
    }
  );
  const eliminarProductoMutation = mutationFood(
    eliminarProductos,
    "productos",
    {
      onSuccess: () => {
        setAlerta({ ...alerta, delete: true });
        setModals({ ...modals, delete: false });
        setCurrentDelete(undefined);
        ScrollToTop();
      },
    }
  );
  const actualizarImagen = mutationFood(
    actualizarImagenProductos,
    "productos",
    {}
  );

  const agregarProductoForm = useForm({
    defaultValues: crearProductoDefaultValues,
    resolver: zodResolver(crearProductoSchema),
  });
  const actualizarProductoForm = useForm({
    defaultValues: actualizarProductoDefaultValues,
    resolver: zodResolver(actualizarProductoSchema),
  });

  function onEditPress(producto: Producto) {
    setCurrentProduct(producto);
    setModals({ ...modals, edit: true });
  }
  function onDeletePress(producto: Producto) {
    setCurrentDelete(producto);
    setModals({ ...modals, delete: true });
  }

  function editOpen() {
    actualizarProductoForm.setValue("nombre", currentProduct?.nombre ?? "");
    actualizarProductoForm.setValue(
      "descripcion",
      currentProduct?.descripcion ?? ""
    );
    actualizarProductoForm.setValue("precio", currentProduct?.precio ?? 0);
    actualizarProductoForm.setValue("tipo", currentProduct?.tipo ?? "");
    actualizarProductoForm.setValue(
      "categoriaProducto",
      currentProduct?.idCategoria ?? 0
    );
  }

  useEffect(() => {
    if (modals.add) {
      agregarProductoForm.reset();
    }
  }, [modals.add]);
  useEffect(() => {
    if (modals.edit) {
      actualizarProductoForm.reset();
      editOpen();
    } else {
      setCurrentProduct(undefined);
    }
  }, [modals.edit]);
  return (
    <>
      <Modal
        open={modals.delete}
        title="Elimiar Producto"
        size="sm"
        onClose={() => setModals({ ...modals, delete: false })}
        onConfirm={() => {
          eliminarProductoMutation.mutate(currentDelete?.id ?? 0);
        }}
      >
        <Typography variant="h6">{`¿Desea eliminar el producto ${currentDelete?.nombre}?`}</Typography>
      </Modal>
      <Modal
        open={modals.edit}
        title="Editar Producto"
        size="sm"
        onClose={() => setModals({ ...modals, edit: false })}
        onSave={() => {
          actualizarProductoForm.handleSubmit((data) => {
            console.log(data.image);
            actualizarProductoMutation.mutate({
              id: currentProduct?.id ?? 0,
              nombre: data.nombre,
              descripcion: data.descripcion,
              precio: data.precio,
              tipo: data.tipo,
              idCategoria: data.categoriaProducto,
            });
            if (data.image !== null) {
              actualizarImagen.mutate({
                id: currentProduct?.id ?? 0,
                image: data.image,
              });
            }
          })();
        }}
      >
        <ActualizarProductoForm
          form={actualizarProductoForm}
          categorias={categorias}
        />
      </Modal>
      <Modal
        open={modals.add}
        title="Agregar Producto"
        size="sm"
        onClose={() => setModals({ ...modals, add: false })}
        onSave={() => {
          agregarProductoForm.handleSubmit((data) => {
            crearProductoMutation.mutate({
              nombre: data.nombre,
              descripcion: data.descripcion,
              precio: data.precio,
              tipo: data.tipo,
              idCategoria: data.categoriaProducto,
              imagen: "algo/Ruta",
              // imagen: data.image,
            });
          })();
        }}
      >
        <CrearProductoForm form={agregarProductoForm} categorias={categorias} />
      </Modal>
      <Container>
        {alerta.add && (
          <Alert
            onClose={() => {
              setAlerta({ ...alerta, add: false });
            }}
          >
            Producto Creado
          </Alert>
        )}
        {alerta.edit && (
          <Alert
            onClose={() => {
              setAlerta({ ...alerta, edit: false });
            }}
          >
            Producto Actualizado
          </Alert>
        )}
        {alerta.delete && (
          <Alert
            onClose={() => {
              setAlerta({ ...alerta, delete: false });
            }}
          >
            Producto Eliminado
          </Alert>
        )}
        <Typography
          variant="h6"
          sx={{
            paddingTop: 2,
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Productos
        </Typography>
        <Grid container spacing={2} sx={{ padding: 5 }}>
          {productos.length > 0 ? (
            productos?.map((producto: Producto) => (
              <Grid item xs={3} key={producto.id}>
                <ProductCard
                  nombre={producto.nombre}
                  precio={producto.precio}
                  descripcion={producto.descripcion}
                  imagen={
                    producto.imagen === "algo/Ruta" ||
                    producto.imagen === "" ||
                    producto.imagen === null ||
                    producto.imagen === undefined
                      ? HomeImage
                      : `http://localhost:3000${producto.imagen}`
                  }
                  producto={producto}
                  onDelete={onDeletePress}
                  onEdit={onEditPress}
                />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                paddingTop: 2,
                fontSize: "30px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No Hay Productos Registrados
            </Typography>
          )}
        </Grid>
        <AddFab onClick={() => setModals({ ...modals, add: true })} />
      </Container>
    </>
  );
}

export default Productos;
