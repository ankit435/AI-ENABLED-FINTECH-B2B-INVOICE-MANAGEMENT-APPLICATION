package com.higradius;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.HRC.web.dao.InvoiceDao;

/**
 * Servlet implementation class GetInvoices
 */
@SuppressWarnings("serial")
@WebServlet("/getInvoices")
public class GetInvoices extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		int start=0,limit=100;
		String value=null;
		
		if(request.getParameter("start")!=null&&request.getParameter("limit")!=null)	
		{
			start = Integer.parseInt(request.getParameter("start"));
			limit = Integer.parseInt(request.getParameter("limit"));	
			
		}
		if(request.getParameter("value")!=null)
		{
			value=request.getParameter("value");
		}
		if(value==""||value==null)
		{
			System.out.println("empty");	
		}
		else
		{
			System.out.println(value);
		}
		try {
			InvoiceDao invoice_list = new InvoiceDao();
			response.setContentType("application/json");
			
			//response.getWriter().append("status: sucess").append(invoice_list.getInvoice(start, limit));
			response.setHeader("Access-Control-Allow-Origin", "*");
//		    response.setHeader("Access-Control-Allow-Methods", "POST, GET,");
		
			
			response.getWriter().write(invoice_list.getInvoice(start, limit,value));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


}
