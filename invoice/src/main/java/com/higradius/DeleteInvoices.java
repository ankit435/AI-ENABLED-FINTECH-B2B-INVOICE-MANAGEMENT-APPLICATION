package com.higradius;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HRC.web.dao.InvoiceDao;
import org.json.simple.parser.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;


/**
 * Servlet implementation class DeleteInvoices
 */
@SuppressWarnings("serial")
@WebServlet("/deleteInvoices")
public class DeleteInvoices extends HttpServlet {
	
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		
//		//response.getWriter().append("Served at: ").append(request.getContextPath());
//	
//		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//	    response.setHeader("Access-Control-Allow-Methods", "*");
//		response.getWriter().append(request.getContextPath());
//	}
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, java.io.IOException
	{
	
		InvoiceDao dao = new InvoiceDao();

		try {
		    String s=request.getParameter("data");
		    String sa[]=s.split(",");
		    ArrayList<Integer>toDelete=new ArrayList<Integer>();
		    for(int i=0;i<sa.length;i++)
		    {
		    	toDelete.add(Integer.parseInt(sa[i]));
		    }
			response.getWriter().write(dao.deleteInvoices(toDelete));
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	    response.setHeader("Access-Control-Allow-Methods", "*");
	    response.getWriter().append(request.getContextPath());

	
	//doGet(request, response);
}
}