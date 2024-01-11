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
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Transaction;

import java.util.List;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Contract
@Default
public interface InventoryInterface {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param product data TODO DOCUMENT ME!
     */
    @Transaction
    void addProduct(Product product);

    /**
     * TODO DOCUMENT ME!
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */

    int getAvailableQuantity(int productID);

    /**
     * TODO DOCUMENT ME!
     *
     * @param product TODO DOCUMENT ME!
     */
    @Transaction
    void removeProduct(Product product);

    /**
     * TODO DOCUMENT ME!
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Transaction
    int updateInventory(int productID);

    /**
     * TODO DOCUMENT ME!
     *
     * @param productList TODO DOCUMENT ME!
     */
    @Transaction
    void updateInventory(List<Product> productList);

    /**
     * TODO DOCUMENT ME!
     *
     * @param productID      TODO DOCUMENT ME!
     * @param quantityChange TODO DOCUMENT ME!
     */
    @Transaction
    void updateProductQuantity(int productID, int quantityChange);
}
