import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import ProductList from "../components/ProductList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchProducts, fetchTypes} from "../http/productAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchProducts(null , null , 1 ,3).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
    } , [])

    useEffect(() =>{
        fetchProducts(product.selectedType.id , product.selectedBrand.id , product.page ,3).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType , product.selectedBrand])

    return (
        <Container>
          <Row className="mt-3">
              <Col md = {3}>
                  <TypeBar />
              </Col>
              <Col md = {9}>
                  <BrandBar />
                  <ProductList />
                  <Pages />
              </Col>
          </Row>
        </Container>

    );
});

export default Shop;