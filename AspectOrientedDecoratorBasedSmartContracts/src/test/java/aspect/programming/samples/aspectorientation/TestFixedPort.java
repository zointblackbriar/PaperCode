package aspect.programming.samples.aspectorientation;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import de.aspect.programming.samples.aspectorientation.AspectorientationApplication;

//@RunWith(SpringRunner.class)
@SpringBootTest(classes = AspectorientationApplication.class, webEnvironment=SpringBootTest.WebEnvironment.DEFINED_PORT)
@ActiveProfiles("fixedport")
public class TestFixedPort {
	private final static int EXPECTED_PORT = 7777; 
	
	@Value("${server.port}")
	private int serverPort; 
	
	@Autowired
	private ServerProperties serverProperties;
	
	
	@Test 
	public void testFixedPortReady() {
		Assertions.assertEquals(EXPECTED_PORT, serverPort, "Reading fixed port from the server by @Value{\"${server.port}\" will get the port");
	}
	
	@Test 
	public void testFixedPortAsServer() {
		int port = serverProperties.getPort(); 
		Assertions.assertEquals(EXPECTED_PORT, port, "Reading fixed port from serverProperties will get the port");
	}
}
