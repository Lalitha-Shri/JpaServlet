package com.example.product;

import java.util.List;

public interface ProductService {
    ProductEntity saveProduct(ProductEntity employee);

    List<ProductEntity> fetchAllProducts();
}
