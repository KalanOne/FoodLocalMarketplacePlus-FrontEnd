import React, { useState } from "react";
import Container from "../../../components/common/Container";
import { Grid } from "@mui/material";
import PedidoCard from "../../../components/common/PedidoCard";
import useAuthRedirect from "../../../hooks/redirect";
import { useJwt } from "../../../stores/jwt";
import { useForm } from "react-hook-form";
import {
  actualizarEstadoDefaultValues,
  actualizarEstadoSchema,
} from "../validation/updateEstado";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../../../components/common/Modal";
import PedidoUpdateForm from "./PedidoUpdateForm";

const DATA = [
  {
    id: 1,
    estado: "En proceso",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    estado: "Enviado",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    estado: "En Camino",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    estado: "Entregado",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    estado: "En proceso",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    estado: "Enviado",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    estado: "En proceso",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    estado: "En proceso",
    pagado: "Pagado",
    imagen: "https://picsum.photos/200/300",
  },
];

function Pedidos(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [modals, setModals] = useState({
    edit: false,
  });

  const actualizarEstadoForm = useForm({
    defaultValues: actualizarEstadoDefaultValues,
    resolver: zodResolver(actualizarEstadoSchema),
  });

  function onEditPress() {
    setModals({ ...modals, edit: true });
  }

  return (
    <>
      <Modal
        open={modals.edit}
        title="Actualizar Estado"
        size="sm"
        onClose={() => setModals({ ...modals, edit: false })}
        onSave={() => {
          actualizarEstadoForm.handleSubmit((data) => {
            console.log(data);
          })();
        }}
      >
        <PedidoUpdateForm form={actualizarEstadoForm} />
      </Modal>
      <Container>
        <Grid container spacing={2} sx={{ padding: 5 }}>
          {DATA.map((producto: any) => (
            <Grid item xs={3} key={producto.id}>
              <PedidoCard
                id={producto.id}
                estado={producto.estado}
                pagado={producto.pagado}
                imagen={producto.imagen}
                onEdit={onEditPress}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Pedidos;
