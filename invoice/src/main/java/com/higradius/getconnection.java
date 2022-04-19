package com.higradius;
import java.sql.Connection;
import java.sql.DriverManager;



/**
 * Servlet implementation class getconnection
 */
//@WebServlet("/getconnection")
public class getconnection{

	public Connection GetConnection()
	{
		try
		{  
			Class.forName("com.mysql.cj.jdbc.Driver");  
			String URL = "jdbc:mysql://localhost/invoice";
			String username = "root";
			String password = "1905161";
			return DriverManager.getConnection(URL, username, password);     
		}
		
		catch(Exception e)
		{ 
			System.out.println(e);
		}
		return null;  
	}

}
