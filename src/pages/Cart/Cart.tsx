import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, useMediaQuery } from "@mui/material";
import {
  ShoppingCartOutlined,
  DeleteSweepOutlined,
  ChevronLeft,
} from "@mui/icons-material";

import { CartEmpty, DialogComponent } from "../../components";
import { selectCart } from "../../store/cart/selectors";
import { useAppDispatch } from "../../store";
import { clearCartPizza } from "../../store/cart/slice";

import CartMobile from "./CartMobile";
import CartDesktop from "./CartDesktop";

import "./cart.scss";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { cartPizzas, totalCount, totalPrice } = useSelector(selectCart);

  const [dialogShow, setDialogShow] = React.useState(false);

  const cartMobileShow = useMediaQuery("(max-width: 680px)");

  const onClearCart = () => {
    dispatch(clearCartPizza());
    setDialogShow(false);
  };
  const onCloseDialog = () => {
    setDialogShow(false);
  };

  return (
    <div>
      <DialogComponent
        dialogShow={dialogShow}
        onClear={onClearCart}
        onCloseDialog={onCloseDialog}
        dialogTitle="Cart"
        dialogContent="Are you sure you want to empty the cart?"
      />
      <>
        {cartPizzas.length > 0 ? (
          <div className="cart d-flex flex-column">
            <div className="d-flex justify-between align-center mb-30">
              <h1 className="d-flex align-center">
                <ShoppingCartOutlined /> Cart
              </h1>
              <Button
                onClick={() => setDialogShow(true)}
                color="error"
                startIcon={<DeleteSweepOutlined />}
              >

                Empty cart
              </Button>
            </div>
            <ul className="cart__items mb-30 flex">
              {cartPizzas.map((item) =>
                cartMobileShow ? (
                  <CartMobile key={item.uniqueId} {...item} />
                ) : (
                  <CartDesktop key={item.uniqueId} {...item} />
                )
              )}
            </ul>
            <div className="d-flex align-center justify-between mb-15">
              <p className="cart__full">
                Total pizzas: <b>{totalCount} шт.</b>
              </p>
              <p className="cart__full">
                Order price:{" "}
                <b className="cart__full-orange">{totalPrice} /=</b>
              </p>
            </div>
            <div className="d-flex align-center justify-between mb-30">
              <Button
                onClick={() => navigate("/")}
                color="success"
                variant="outlined"
                startIcon={<ChevronLeft />}
              >
                Go back
              </Button>
              <Button color="error" variant="contained">
                Pay now
              </Button>
            </div>
          </div>
        ) : (
          <CartEmpty
            title="Cart is empty"
            keyTitleOne="ordered"
            keyTitleTwo="order"
          />
        )}
      </>
    </div>
  );
};

export default Cart;
