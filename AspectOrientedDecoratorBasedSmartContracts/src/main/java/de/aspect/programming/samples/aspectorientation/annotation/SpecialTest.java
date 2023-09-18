package de.aspect.programming.samples.aspectorientation.annotation;

import java.lang.annotation.RetentionPolicy; 
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention; 
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface SpecialTest {
	//One behavior
	boolean enabled() default true;

}
