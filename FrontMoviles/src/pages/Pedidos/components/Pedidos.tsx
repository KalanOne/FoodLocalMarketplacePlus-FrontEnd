import React, { useEffect, useState } from "react";
import Container from "../../../components/common/Container";
import { Grid, Typography } from "@mui/material";
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
import { useQuery } from "react-query";
import { actualizarEstado, pedidosProveedor } from "../api/pedidosApi";
import { PedidosType } from "../types/pedidosTypes";
import { mutationFood } from "../../../api/mutation";
import { ScrollToTop } from "../../../utils/ScrollToTop";
import PedidosTable from "./PedidosTable";

function Pedidos(): React.ReactElement {
  useAuthRedirect({});
  const correo = useJwt((state) => state.correo);
  const [currentPedido, setCurrentPedido] = useState<PedidosType>();
  const [modals, setModals] = useState({
    edit: false,
  });

  const pedidosProveedorQuery = useQuery({
    queryKey: ["pedidos"],
    queryFn: async () => {
      return await pedidosProveedor();
    },
  });
  const pedidos = pedidosProveedorQuery.data?.data ?? [];

  const actualizarEstadoMutation = mutationFood(actualizarEstado, "pedidos", {
    onSuccess: () => {
      // setAlerta({ ...alerta, add: true });
      setModals({ ...modals, edit: false });
      ScrollToTop();
    },
  });

  const actualizarEstadoForm = useForm({
    defaultValues: actualizarEstadoDefaultValues,
    resolver: zodResolver(actualizarEstadoSchema),
  });

  function onEditPress(pedido: PedidosType) {
    setModals({ ...modals, edit: true });
    setCurrentPedido(pedido);
  }

  useEffect(() => {
    if (modals.edit) {
      actualizarEstadoForm.reset();
      actualizarEstadoForm.setValue(
        "estado",
        currentPedido ? currentPedido.estado : ""
      );
    }
  }, [modals.edit]);

  useEffect(() => {
    if (pedidos.length > 0) {
      console.log(pedidos);
    }
  }, [pedidos]);

  return (
    <>
      <Modal
        open={modals.edit}
        title="Actualizar Estado"
        size="sm"
        onClose={() => setModals({ ...modals, edit: false })}
        onSave={() => {
          actualizarEstadoForm.handleSubmit((data) => {
            actualizarEstadoMutation.mutate({
              id: currentPedido?.id,
              estado: data.estado,
            });
          })();
        }}
      >
        <PedidoUpdateForm form={actualizarEstadoForm} />
      </Modal>
      <Container>
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
          Pedidos
        </Typography>
        <Grid container spacing={2} sx={{ padding: 4 }}>
          {pedidos.length > 0 ? (
            pedidos.map((pedido: any) => (
              <Grid item xs={3} key={pedido.id}>
                <PedidoCard
                  id={pedido.id}
                  estado={pedido.estado}
                  pagado={pedido.pagado}
                  pedido={pedido}
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
              No Hay Pedidos Registrados
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}

export default Pedidos;
