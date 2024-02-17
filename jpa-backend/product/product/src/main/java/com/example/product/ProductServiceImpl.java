package com.example.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
//service call will interact with repository class to do Crud operation into database
public class ProductServiceImpl implements  ProductService{
    @Autowired
    private ProductRepository productRepository;

    @Override
    public ProductEntity saveProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    @Override
    public List<ProductEntity> fetchAllProducts() {
    List<ProductEntity> allProduct=productRepository.findAll();
        return allProduct;
    }
}
