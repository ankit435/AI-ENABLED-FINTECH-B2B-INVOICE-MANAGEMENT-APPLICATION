package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.HRC.web.dao.InvoiceDao;

/**
 * Servlet implementation class SearchInvoice
 */
@WebServlet("/SearchInvoice")
public class SearchInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "*");
	    response.setContentType("application/json");
	    response.getWriter();
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
			json = (JSONObject) JSON.parse(jsonString);

			String doc_id =(String)json.get("doc_id");
			String buisness_year =(String)json.get("buisness_year");
			String invoice_id =(String)json.get("invoice_id");
			String cust_number =(String)json.get("cust_number");
			
			System.out.println(invoice_id+cust_number+doc_id+buisness_year);
			response.setContentType("application/json");
			
			if(doc_id!=null||buisness_year!=null ||invoice_id!=null ||cust_number!=null)
			{
				response.getWriter().append(dao.searchInvoice(doc_id,invoice_id,buisness_year,cust_number));	
			}
			
			
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		};
		
		doGet(request, response);
		
	}


}
