package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.HRC.web.dao.InvoiceDao;

/**
 * Servlet implementation class EditInvoice
 */
@SuppressWarnings("serial")
@WebServlet("/editInvoice")
public class EditInvoice extends HttpServlet {
	
	
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		InvoiceDao dao = new InvoiceDao();
		StringBuffer jb = new StringBuffer();
		String line = null;
		BufferedReader reader =  request.getReader();
		while ((line = reader.readLine()) != null)
		      jb.append(line);
		String jsonString = jb.toString();
		System.out.print(jsonString);
		JSONParser JSON = new JSONParser(); 
		JSONObject json;

		
		
		try {
			
			json = (JSONObject) JSON.parse(jsonString);;
			
			Long sl_no =(long)json.get("sl_no");
			String invoice_currency ="'"+(String)json.get("invoice_currency")+"'";
			String cust_payment_terms ="'"+(String)json.get("cust_payment_terms")+"'";			
			dao.update(sl_no,invoice_currency,cust_payment_terms);
			
		

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "*");
		doGet(request, response);
}
}
