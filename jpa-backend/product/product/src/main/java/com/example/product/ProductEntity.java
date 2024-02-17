package com.example.product;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//Product Entity is the table model class with getters setter constructors having
// field like name,price and category of the table
public class ProductEntity {
    @Id

    int id;
    String name;
    int price;
    String category;
}

