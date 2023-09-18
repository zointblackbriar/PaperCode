/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.aspect.programming.samples.aspectorientation.joinpoint;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Before;

import java.util.Arrays;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
public class PersonAspectJoinPoint {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param joinPoint TODO DOCUMENT ME!
     */
    @Before("execution(public void de.aspect.programming.samples.aspectorientation.model..set(*))")
    public void loggingAdvice(JoinPoint joinPoint) {
        System.out.println("Before running loggingAdvice on method =" + joinPoint.toString());
        System.out.println("Arguments have been typed: " + Arrays.toString(joinPoint.getArgs()));
    }

    /**
     * TODO DOCUMENT ME!
     *
     * @param name TODO DOCUMENT ME!
     */
    @Before("args(name)")
    public void logStringArguments(String name) {
        System.out.println("String argument passed=" + name);
    }
}
