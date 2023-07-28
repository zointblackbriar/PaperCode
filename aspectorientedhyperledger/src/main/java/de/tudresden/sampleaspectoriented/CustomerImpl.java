/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.sampleaspectoriented;

/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class CustomerImpl {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    public void addCustomer() {
        System.out.println("addCustomer() is running");
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param name TODO DOCUMENT ME!
     */
    public void addCustomerAround(String name) {
        System.out.println("addCustomerAround() is running, args: " + name);
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    public String addCustomerReturnValue() {
        System.out.println("addCustomerReturnValue() is running");

        return "abc";
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @throws Exception
     */
    public void addCustomerThrowException() throws Exception {
        System.out.println("addCustomerThrowException() is running");
        throw new Exception("Generic error");
    }
}
