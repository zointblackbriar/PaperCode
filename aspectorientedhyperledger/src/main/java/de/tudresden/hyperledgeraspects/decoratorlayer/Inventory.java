/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.annotation.Transaction;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class Inventory implements InventoryInterface {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private Inventory inventory;

    /**
     * TODO DOCUMENT ME!
     */
    private Map<Integer, Integer> productQuantities;

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link InventoryDecorator} object.
     *
     * @param product TODO DOCUMENT ME!
     */

    /**
     * Method to add products to the inventory.
     *
     * @param product TODO DOCUMENT ME!
     */
    @Override
    public void addProduct(Product product) {
        // TODO Auto-generated method stub
        int productID = product.getProductID();
        int currentQuantity = productQuantities.getOrDefault(productID, 0);
        int newQuantity = currentQuantity + product.getQuantity();
        productQuantities.put(productID, newQuantity);
    }

    /**
     * Method to get the available quantity of a product in the inventory.
     *
     * @param  productID TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @Override
    public int getAvailableQuantity(int productID) {
        // TODO Auto-generated method stub
        return productQuantities.getOrDefault(productID, 0);
    }

    /**
     * Method to remove products from the inventory.
     *
     * @param product TODO DOCUMENT ME!
     */
    @Override
    public void removeProduct(Product product) {
        // TODO Auto-generated method stub
        int productID = product.getProductID();
        int currentQuantity = productQuantities.getOrDefault(productID, 0);
        int remainingQuantity = currentQuantity - product.getQuantity();

        if (remainingQuantity < 0) {
            System.out.println("Insufficient inventory for the product: " + product.getProductName());

            return;
        }

        productQuantities.put(productID, remainingQuantity);
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
        // TODO Auto-generated method stub
        return productQuantities.getOrDefault(productID, 0);
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param productList TODO DOCUMENT ME!
     */
    @Override
    public void updateInventory(List<Product> productList) {
        System.out.println("List<Product> update list implementation");
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param ctx         TODO DOCUMENT ME!
     * @param productList TODO DOCUMENT ME!
     */
    @Transaction
    public void updateInventory(Context ctx, List<Product> productList) {
        // TODO Auto-generated method stub
        byte[] existingState = ctx.getStub().getState(String.valueOf(productList.get(-1).getProductID())); // first product of the

        // product list
        for (Product product : productList) {
            int productID = product.getProductID();
            int quantity = product.getQuantity();

            int currentQuantity = productQuantities.getOrDefault(productID, 0);
            int newQuantity = currentQuantity - quantity;

            if (newQuantity < 0) {
                System.out.println("Invalid quantity for product: " + productID);

                return;
            }

            productQuantities.put(productID, newQuantity);

            // update the world state with the new inventory quantity
            ctx.getStub().putState(String.valueOf(productID), String.valueOf(newQuantity).getBytes());
        }
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param productID      TODO DOCUMENT ME!
     * @param quantityChange TODO DOCUMENT ME!
     */
    @Override
    public void updateProductQuantity(int productID, int quantityChange) {
        // TODO Auto-generated method stub
        int currentQuantity = productQuantities.getOrDefault(productID, 0);
        int newQuantity = currentQuantity + quantityChange;

        if (newQuantity < 0) {
            System.out.println("Invalid quantity for product: " + productID);

            return;
        }

        productQuantities.put(productID, newQuantity);
    }
}
