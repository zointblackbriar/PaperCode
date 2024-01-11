/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects.decoratorlayer;

import java.util.ArrayList;
import java.util.List;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class RetailerCompositeDesignPattern {

    //~ Inner Interfaces ---------------------------------------------------------------------------------------------------------

    // Component
    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    public interface RetailerComponent {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         */
        void displayInfo();
    }

    //~ Inner Classes ------------------------------------------------------------------------------------------------------------

    // Leaf
    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    public static class IndividualRetailer implements RetailerComponent {

        //~ Instance fields ------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         */
        private String name;

        //~ Constructors ---------------------------------------------------------------------------------------------------------

        /**
         * Creates a new {@link IndividualRetailer} object.
         *
         * @param name TODO DOCUMENT ME!
         */
        public IndividualRetailer(String name) {
            this.name = name;
        }

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         */
        @Override
        public void displayInfo() {
            System.out.println("Individual retailer: " + name);
        }
    }

    // Composite
    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    public static class RetailerGroup implements RetailerComponent {

        //~ Instance fields ------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         */
        private String groupName;

        /**
         * TODO DOCUMENT ME!
         */
        private List<RetailerComponent> retailers = new ArrayList<>();

        //~ Constructors ---------------------------------------------------------------------------------------------------------

        /**
         * Creates a new {@link RetailerGroup} object.
         *
         * @param groupName TODO DOCUMENT ME!
         */
        public RetailerGroup(String groupName) {
            this.groupName = groupName;
        }

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         *
         * @param retailer TODO DOCUMENT ME!
         */
        public void addRetailer(RetailerComponent retailer) {
            retailers.add(retailer);
        }

        /**
         * TODO DOCUMENT ME!
         */
        @Override
        public void displayInfo() {
            System.out.println("Retailer Group: " + groupName);

            for (RetailerComponent retailer : retailers) {
                retailer.displayInfo();
            }
        }
    }
}
