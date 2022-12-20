import {makeAutoObservable} from "mobx";

export default class ProductStore {

    constructor() {
        this._types = []

        this._brands = []

        this._product = [
                {id:1, name:'Кирпич полнотелый рядовой', price:24 , img:'4fe1c1ac-adb7-4122-8e14-ab31d41cee8a.jpg'},
                {id:2, name:'Герметик', img:'3bf4acd5-f56d-4cb0-aefb-10c2cc3fcc56.jpg'},
                {id:3, name:'Шпатлевка', price:561, img: '5d535a04-f464-4027-b157-82ee3144c8fc.jpg'},
                {id:4, name:'Цемент', img:  'a7e078a0-0663-4ab7-81a7-121265959af0.jpg'},
                {id:5, name:'1', img:'7b326a01-f029-4d0f-8a6a-98cc23851e86.jpg'},
                {id:6, name:'Шпаклевка', price:500, img:'9460ace5-8f93-4b1d-aa99-547fe0612a2b.jpg'},
                {id:7, name:'1'},
                {id:8, name:'1'},
                {id:9, name:'1'},
                {id:10, name:'1'},
                {id:11, name:'1'},
                {id:12, name:'1'},
        ]
        this._basketproduct = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }


    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }


    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    setPage(page){
        this._page = page
    }

    setTotalCount(count){
        this._totalCount = count
    }

    get Types(){
        return this._types
    }

    get Brands(){
        return this._brands
    }

    get Products(){
        return this._products
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get totalCount(){
        return this._totalCount
    }

    get page(){
        return this._page
    }

    get limit(){
        return this._limit
    }


}