package de.aspect.programming.samples.aspectorientation.annotation;

import java.lang.annotation.ElementType; 
import java.lang.annotation.RetentionPolicy; 
import java.lang.annotation.Target; 
import java.lang.annotation.Retention;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface SpecialTesterInfo {
	
	public enum Priority {
		LOW, MEDIUM, HIGH
	}
	
	Priority priority() default Priority.MEDIUM;  
	
	
	String[] tags() default " "; 
	
	String createdBy() default "samplesample";
}
