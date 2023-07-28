/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.hyperledgeraspects;

import de.tudresden.sampleaspectoriented.aspectmicro.RunningAspect;

import org.aspectj.lang.Signature;
import org.aspectj.lang.reflect.SourceLocation;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class AspectOrientedTest {

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
        Assertions.assertTrue(result);
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
