package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.HRC.web.dao.InvoiceDao;
import com.google.gson.Gson;



/**
 * Servlet implementation class AddInvoice
 */
@SuppressWarnings("serial")
@WebServlet("/addInvoice")
public class AddInvoice extends HttpServlet {
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		InvoiceDao dao = new InvoiceDao();


		 try {
		      response.addHeader("Access-Control-Allow-Origin", "*");
		      
		      BufferedReader reader = request.getReader();
		      Gson gson = new Gson();
		      @SuppressWarnings("unchecked")
			  HashMap<String, String> map = gson.fromJson(reader, HashMap.class);
		      //System.out.println(map);
		      response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		      response.setHeader("Access-Control-Allow-Methods", "*");
		      response.getWriter().write(dao.addInvoice(map));


		    } catch (Exception e) {
		      response.setStatus(500);
		      System.out.println(e);
		      //response.getWriter().append(JSON.stringify("message", e.getMessage())).flush();
		    }
		doGet(request, response);
		
	}


}
