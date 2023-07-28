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
public interface Inventory {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param product data TODO DOCUMENT ME!
     */
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
    void removeProduct(Product product);

    /**
     * TODO DOCUMENT ME!
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    int updateInventory(int productID);

    /**
     * TODO DOCUMENT ME!
     *
     * @param productList TODO DOCUMENT ME!
     */
    void updateInventory(List<Product> productList);

    /**
     * TODO DOCUMENT ME!
     *
     * @param productID      TODO DOCUMENT ME!
     * @param quantityChange TODO DOCUMENT ME!
     */
    void updateProductQuantity(int productID, int quantityChange);
}
