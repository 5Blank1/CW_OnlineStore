import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const{product} = useContext(Context)
    return (
        <Col className="d-flex">
            {product._brands.map(brand =>
            <Card
                style={{cursor: 'pointer'}}
                key = {brand.id}
                className="p-3"
                onClick={() => product.setSelectedBrand(brand)}
                border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
            >
                {brand.name}
            </Card>
            )}
        </Col>
    );
});

export default BrandBar;