import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import {BASKET_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import { isEmpty } from "lodash";
import {Context} from "../index";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateProduct from "../components/modals/CreateProduct";


const Basket = observer(() => {
    const {basket} = useContext(Context)
    const navigate = useNavigate()

        return (


    <Container className="d-flex flex-row">
        <div variant={"outline-dark"} className="mt-2 p-5 fw-bold">
            Наименование товара
            <div className="mt-5 fw-normal">Кирпич красный</div>
            <div className="mt-5 fw-normal">Кирпич полнотелый рядовой</div>
            <div className="mt-5 fw-normal">Шпаклевка</div>
            <div className="mt-5 fw-normal">Герметик силиконовый санитарный</div>
            <div variant={"outline-dark"} className="mt-2 p-5 fw-bold" >
                Итого:
            </div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-light">Оформить заказ</Button></div>
        </div>
        <div variant={"outline-dark"} className="mt-2 p-5 fw-bold" >
            Количество
           <div className="mt-5 fw-normal"><Button className="btn-sm btn-light">-</Button>2<Button className="btn-sm btn-light">+</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-light">-</Button>1<Button className="btn-sm btn-light">+</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-light">-</Button>5<Button className="btn-sm btn-light">+</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-light">-</Button>3<Button className="btn-sm btn-light">+</Button></div>
        </div>
        <div variant={"outline-dark"} className="mt-2 p-5 fw-bold" >
            Цена за 1 шт
            <div className="mt-5 fw-normal">25</div>
            <div className="mt-5 fw-normal">24</div>
            <div className="mt-5 fw-normal">561</div>
            <div className="mt-5 fw-normal">1592</div>
        </div>
        <div variant={"outline-dark"} className="mt-2 p-5 fw-bold" >
            Сумма
            <div className="mt-5 fw-normal">50</div>
            <div className="mt-5 fw-normal">24</div>
            <div className="mt-5 fw-normal">2805</div>
            <div className="mt-5 fw-normal">4776</div>
            <div className="mt-5 fw-bold">7630</div>
        </div>
        <div variant={"outline-dark"} className="mt-2 p-5 fw-bold" >
            Удалить
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-danger">Удалить</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-danger">Удалить</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-danger">Удалить</Button></div>
            <div className="mt-5 fw-normal"><Button className="btn-sm btn-danger">Удалить</Button></div>
        </div>

    </Container>
        );
});

export default Basket;