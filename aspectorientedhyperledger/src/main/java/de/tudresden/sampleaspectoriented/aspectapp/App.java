/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.sampleaspectoriented.aspectapp;

import de.tudresden.sampleaspectoriented.Customer;
import de.tudresden.sampleaspectoriented.CustomerImpl;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class App {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param args TODO DOCUMENT ME!
     */
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("Hyperledger-Customer.xml");
        Customer customer = (Customer) applicationContext.getBean("customerimplementation");
        customer.addCustomerAround("hyperledger has been activated");
    }
}
