/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import java.util.List;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public interface WarehouseInterface {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    // method to check inventory availability
    /**
     * TODO DOCUMENT ME!
     *
     * @param  productList TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    boolean checkInventoryAvailability(List<Product> productList);

    /**
     * Method to place an order in the supply chain network.
     *
     * @param order TODO DOCUMENT ME!
     */
    void placeOrder(Order order);

    /**
     * Method to process and fulfill the order.
     */
    void processOrder();

    /**
     * Method to process and fulfill the order.
     *
     * @param order TODO DOCUMENT ME!
     */
    void processOrder(Order order);

    /**
     * TODO DOCUMENT ME!
     *
     * @param  order TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    String trackOrderStatus(Order order);

    /**
     * Method to update the inventory after order fullfilment.
     */
    void updateInventory();
}
