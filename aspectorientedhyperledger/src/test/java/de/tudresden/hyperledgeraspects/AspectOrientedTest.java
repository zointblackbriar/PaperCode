/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects;

import de.tudresden.sampleaspectoriented.Customer;
import de.tudresden.sampleaspectoriented.aspectmicro.RunningAspect;

import org.aspectj.lang.Signature;
import org.aspectj.lang.reflect.SourceLocation;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.test.context.ContextConfiguration;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@ContextConfiguration(locations = "classpath:Hyperledger-Customer.xml")
public class AspectOrientedTest {

    //~ Instance fields ----------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    private Customer customer;

    //~ Constructors -------------------------------------------------------------------------------------------------------------

    /**
     * Creates a new {@link AspectOrientedTest} object.
     *
     * @param customer TODO DOCUMENT ME!
     */
    @Autowired
    public AspectOrientedTest(Customer customer) {
        customer = customer;
    }

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    @Test
    public void aspectOrientationForLogging() {
        RunningAspect runningAspect = new RunningAspect();
        JoinPointMock joinPoint = new JoinPointMock();
        Throwable error = new RuntimeException("Test exception");
        boolean result = runningAspect.logAfterThrowing(joinPoint, error);
        Assertions.assertFalse(result);
    }

    /**
     * TODO DOCUMENT ME!
     */
    @Test
    public void testAddCustomerAround() {
        String result = customer.addCustomerAround("hyperledger has been activated");
        Assertions.assertEquals("hyperledger has been activated", result);
    }

    //~ Inner Classes ------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @author $author$
     */
    private static class JoinPointMock implements org.aspectj.lang.JoinPoint {

        //~ Methods --------------------------------------------------------------------------------------------------------------

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public Object[] getArgs() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public String getKind() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public Signature getSignature() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public SourceLocation getSourceLocation() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public StaticPart getStaticPart() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public Object getTarget() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public Object getThis() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public String toLongString() {
            // TODO Auto-generated method stub
            return null;
        }

        /**
         * TODO DOCUMENT ME!
         *
         * @return TODO DOCUMENT ME!
         */
        @Override
        public String toShortString() {
            // TODO Auto-generated method stub
            return null;
        }
    }
}
