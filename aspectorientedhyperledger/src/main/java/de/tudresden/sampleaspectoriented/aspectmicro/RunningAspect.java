/*
 * Copyright 2022-2023 Orcun Oruc
 *
 * You should have received a copy of a license with this program. 
 *
 * You may not use, copy, modify, sublicense, or distribute the Program or any
 * portion of it, except as expressly provided under the given license.
 */
package de.tudresden.sampleaspectoriented.aspectmicro;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;


/**
 * TODO DOCUMENT ME!
 *
 * @author $author$
 */
@Aspect
public class RunningAspect {

    //~ Methods ------------------------------------------------------------------------------------------------------------------

    /**
     * TODO DOCUMENT ME!
     *
     * @param  joinPoint TODO DOCUMENT ME!
     * @param  error     TODO DOCUMENT ME!
     *
     * @return TODO DOCUMENT ME!
     */
    @AfterThrowing(
        pointcut = "execution(* de.tudresden.sampleaspectoriented.Customer.addCustomerThrowException(..))", throwing = "error"
    )
    public boolean logAfterThrowing(JoinPoint joinPoint, Throwable error) {
        try {
            System.out.println("logAfterThrowing() is running!");
            System.out.println("hijacked: " + joinPoint.getSignature().getName());
            System.out.println("Exception: " + error);
            System.out.println("*****");
        } catch (Exception ex) {
            ex.printStackTrace();

            return false;
        }

        return true;
    }
}
