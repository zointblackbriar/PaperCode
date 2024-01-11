/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.sampleaspectoriented.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;

import java.util.Arrays;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Aspect
public class LoggingAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  joinPoint TODO DOCUMENT ME!
     *
     * @throws Throwable
     */
    @Around("execution(* de.tudresden.sampleaspectoriented.Customer.addCustomerAround(..))")
    public void logAround(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("logAround() is running!");
        System.out.println("hijacked method: " + joinPoint.getSignature().getName());
        System.out.println("hijacked arguments: " + Arrays.toString(joinPoint.getArgs()));
        System.out.println("Around before is running");
        joinPoint.proceed();
        System.out.println("Around after is running!");
        System.out.println("********");
    }
}
