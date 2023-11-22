import React, { useEffect, useState } from "react";
import useAuthRedirect from "../../../hooks/redirect";
import Container from "../../../components/common/Container";
import { Alert, Grid } from "@mui/material";
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
  categoriaProducto,
  crearProducto,
  getProductos,
} from "../api/productosApi";
import { mutationFood } from "../../../api/mutation";
import { useQuery } from "react-query";

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 1000,
    descripcion: "Descripcion 1",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 2000,
    descripcion: "Descripcion 2",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 2",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 3000,
    descripcion: "Descripcion 3",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 3",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 4000,
    descripcion: "Descripcion 4",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 4",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 5000,
    descripcion: "Descripcion 5",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 5",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 6000,
    descripcion: "Descripcion 6",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 6",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 7000,
    descripcion: "Descripcion 7",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 7",
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 8000,
    descripcion: "Descripcion 8",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 8",
  },
  {
    id: 9,
    nombre: "Producto 9",
    precio: 9000,
    descripcion: "Descripcion 9",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 9",
  },
  {
    id: 10,
    nombre: "Producto 10",
    precio: 10000,
    descripcion: "Descripcion 10",
    imagen: "https://picsum.photos/200/300",
    categoria: "Categoria 10",
  },
];

function Productos(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [alerta, setAlerta] = useState(false);
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
    onSuccess: (data) => {
      console.log(data);
      setAlerta(true);
      setModals({ ...modals, add: false });
    },
  });

  const agregarProductoForm = useForm({
    defaultValues: crearProductoDefaultValues,
    resolver: zodResolver(crearProductoSchema),
  });

  function onEditPress() {
    setModals({ ...modals, edit: true });
    console.log("Editar");
  }
  function onDeletePress() {
    setModals({ ...modals, delete: true });
    console.log("Eliminar");
  }

  useEffect(() => {
    console.log(productos);
  }, [productos]);
  return (
    <>
      <Modal
        open={modals.edit}
        title="Editar Producto"
        size="sm"
        onClose={() => setModals({ ...modals, edit: false })}
        onSave={() => {
          console.log("Guardar");
        }}
      >
        <div>Contenido</div>
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
              imagen: "algo/algo",
            });
          })();
        }}
      >
        <CrearProductoForm form={agregarProductoForm} categorias={categorias} />
      </Modal>
      <Container>
        {alerta && (
          <Alert
            onClose={() => {
              setAlerta(false);
            }}
          >
            Producto Creado
          </Alert>
        )}
        <Grid container spacing={2} sx={{ padding: 5 }}>
          {productos?.map((producto: any) => (
            <Grid item xs={3} key={producto.id}>
              <ProductCard
                nombre={producto.nombre}
                precio={producto.precio}
                descripcion={producto.descripcion}
                imagen={"https://picsum.photos/200/300"}
                onDelete={onDeletePress}
                onEdit={onEditPress}
              />
            </Grid>
          ))}
        </Grid>
        <AddFab onClick={() => setModals({ ...modals, add: true })} />
      </Container>
    </>
  );
}

export default Productos;
