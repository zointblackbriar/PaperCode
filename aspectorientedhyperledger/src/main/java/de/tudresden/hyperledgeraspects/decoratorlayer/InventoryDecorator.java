/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class InventoryDecorator implements Inventory {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private Map<Integer, Integer> productQuantities;

    /**
     * TODO DOCUMENT ME!
     */
    private Inventory wrappee;

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link InventoryDecorator} object.
     */
    public InventoryDecorator() {
        this.productQuantities = new HashMap<Integer, Integer>();
    }

    // Dependency of Injection
    // @Autowired annotation tag can be used.
    /**
     * Creates a new {@link InventoryDecorator} object.
     *
     * @param packageSource TODO DOCUMENT ME!
     */
    public InventoryDecorator(Inventory packageSource) {
        this.wrappee = packageSource;
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

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
        // TODO Auto-generated method stub
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
