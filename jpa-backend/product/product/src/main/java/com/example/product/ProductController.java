package com.example.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//controller class will handle api calls. In this project the endpoint for api call is /product

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;
    //Postmapping is to add the product details to database
    @PostMapping("/product")
    public ProductEntity saveProduct(@RequestBody ProductEntity product) {
        return productService.saveProduct(product);
    }
    //Getmaping is to get all the product details
    @GetMapping("/product")
    public List<ProductEntity> getAllEmployees() {
        return productService.fetchAllProducts();
    }

}
