/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


/**
 * Product class for the Supply Chain Network.
 *
 * @author $author$
 */
@AllArgsConstructor
@Getter
@Setter
public class Product {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * The price of the product.
     */
    private double price;

    /**
     * Â unique identifier for the product.
     */
    private int productID;

    /**
     * The name or description of the product.
     */
    private String productName;

    /**
     * TODO The available quantity of the product(e.g. in inventory or in an order)
     */
    private int quantity;
}
