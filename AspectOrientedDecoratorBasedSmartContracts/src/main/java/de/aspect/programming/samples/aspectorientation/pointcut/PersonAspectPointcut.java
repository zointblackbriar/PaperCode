/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.pointcut;

import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class PersonAspectPointcut {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     */
    @Before("allMethodsPointcut()")
    public void allServiceMethodsAdvice() {
        System.out.println("Before executing service method");
    }

    /**
     * TODO DOCUMENT ME!
     */
    @Pointcut("execution(public String getName())")
    public void getNamePointcut() {
    }

    // Pointcut to execute on all the methods of classes ın a package
    /**
     * TODO DOCUMENT ME!
     */
    /**
     * TODO DOCUMENT ME!
     */
    @Before("getNamePointcut()")
    @Pointcut("within(de.aspect.programming.samples.aspectorientation.service.*)")
    public void loggingAdvice() {
        System.out.println("Executing loggingAdvice on getName()");
    }

    /**
     * TODO DOCUMENT ME!
     */
    @Before("getNamePointcut()")
    public void secondAdvice() {
        System.out.println("Executing secondAdvice on getName()");
    }
}
