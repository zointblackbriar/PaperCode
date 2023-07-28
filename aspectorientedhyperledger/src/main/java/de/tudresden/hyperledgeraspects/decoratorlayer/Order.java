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

import java.util.List;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@AllArgsConstructor
@Getter
@Setter
public class Order {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private String orderID;

    /**
     * TODO DOCUMENT ME!
     */
    private List<Product> productList;

    /**
     * TODO DOCUMENT ME!
     */
    private String status;

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    // Method to add a product to the order
    /**
     * TODO DOCUMENT ME!
     *
     * @param listOfProducts product TODO DOCUMENT ME!
     */
    public void addProductToOrder(List<Product> listOfProducts) {
        for (Product sampleProduct : listOfProducts) {
            productList.add(sampleProduct);
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public double calculateTotalOrderAmount() {
        double totalAmount = 0;

        for (Product product : productList) {
            totalAmount += product.getPrice() * product.getQuantity();
        }

        return totalAmount;
    }
}
