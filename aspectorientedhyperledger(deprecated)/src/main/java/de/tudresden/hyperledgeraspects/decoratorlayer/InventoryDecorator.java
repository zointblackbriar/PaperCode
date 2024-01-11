/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Transaction;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Contract
public class InventoryDecorator implements InventoryInterface {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private InventoryInterface inventory;

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param product TODO DOCUMENT ME!
     */
    @Override
    @Transaction
    public void addProduct(Product product) {
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Override
    public int getAvailableQuantity(int productID) {
        return 0;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param product TODO DOCUMENT ME!
     */
    @Override
    public void removeProduct(Product product) {
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Override
    public int updateInventory(int productID) {
        inventory.updateInventory(productID);

        return 0;
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param productList TODO DOCUMENT ME!
     */
    @Override
    public void updateInventory(List<Product> productList) {
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param productID      TODO DOCUMENT ME!
     * @param quantityChange TODO DOCUMENT ME!
     */
    @Override
    public void updateProductQuantity(int productID, int quantityChange) {
    }
}
