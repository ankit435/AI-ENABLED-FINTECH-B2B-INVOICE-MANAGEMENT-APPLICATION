package com.HRC.web.dao;


import com.HRC.web.model.Invoice;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.higradius.getconnection;
import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;  


public class InvoiceDao 
{
	getconnection getcon = new getconnection();

	public String getInvoice(int start, int limit,String value) throws SQLException 
	{
		ArrayList<Invoice> invoices_list = new ArrayList<Invoice>();
		Connection con = getcon.GetConnection();
		Statement stmt=con.createStatement();
		String names=" sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id";
		String query = "SELECT" +names+" from winter_internship where is_deleted=0 LIMIT "+start+", "+limit;
		if(value!=""&&value!=null)
		{
			query = "SELECT" +names+" from winter_internship where cust_number = "+value+ " AND is_deleted=0 "+ "LIMIT "+start+","+limit;
			
		}
		ResultSet rs=stmt.executeQuery(query);
		while(rs.next()) 
		{
			Invoice inv = new Invoice();			
			inv.setSerial_no(rs.getInt("sl_no"));
			inv.setBusiness_code(rs.getString("business_code"));
			inv.setCustomer_number(rs.getString("cust_number"));
			inv.setClear_date(rs.getString("clear_date"));
			inv.setBusiness_year(rs.getString("buisness_year"));
			inv.setdoc_id(rs.getString("doc_id"));
			inv.setPosting_date(rs.getString("posting_date"));
			inv.setDoc_create_date(rs.getString("document_create_date"));
			inv.setDue_date(rs.getString("due_in_date"));
			inv.setInvoice_currency(rs.getString("invoice_currency"));
			inv.setDoc_type(rs.getString("document_type"));	
			inv.setPosting_id(rs.getInt("posting_id"));
			inv.setTotal_open_amount(rs.getString("total_open_amount"));
			inv.setBaseline_payment_date(rs.getString("baseline_create_date"));	
			inv.setcust_payment_terms(rs.getString("cust_payment_terms"));
			inv.setinvoice_id(rs.getString("invoice_id"));	
			invoices_list.add(inv);
		}
		Gson gson = new GsonBuilder().serializeNulls().create();

		String jsonInvoiceList = gson.toJson(invoices_list);
				
		stmt.close();
		con.close();
		return jsonInvoiceList;
	}


	public String deleteInvoices(ArrayList<Integer> toDelete) throws SQLException {
		Connection con = getcon.GetConnection();
		String response="{"+"Status"+":"+"True"+"}";
		Statement stmt=con.createStatement();
		try {
		for (Integer value : toDelete) {
			String query ="UPDATE winter_internship SET is_deleted=1 where sl_no ="+value;
			if(stmt.executeUpdate(query)>0);
			System.out.println("Deleted Sl_no = "+ value);
         }
		
		return response;
		}
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		stmt.close();
		con.close();
		
		response="{"+"Status"+":"+"False"+"}";
		
		return  response;
		}

	

//	public String addInvoice(String business_code, String cust_number , String clear_date, String buisness_year, String doc_id,
//			String posting_date, String document_create_date, String due_in_date, String invoice_currency,
//			String document_type, String posting_id, String total_open_amount, String baseline_create_date, String invoice_id,
//			String cust_payment_terms) throws SQLException {
//		String response="{"+"Status"+":"+"True"+"}";
//		Connection con = getcon.GetConnection();
//		Statement stmt=con.createStatement();
//		try {
//		String names="business_code,cust_number ,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,invoice_id,cust_payment_terms";
//		String value="VALUES("+business_code+","+cust_number +","+clear_date+","+buisness_year+","+doc_id+","+posting_date+","+document_create_date+","+due_in_date+","+invoice_currency+","+document_type+","+posting_id+","+total_open_amount+","+baseline_create_date+","+invoice_id+","+cust_payment_terms+")";
//		String query="INSERT INTO winter_internship("+names+")"+value;
//		if(stmt.executeUpdate(query)>0);
//		System.out.println("inserted");
//		return  response;
//		}
//		catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		stmt.close();
//		con.close();
//		
//		response="{"+"Status"+":"+"False"+"}";
//		
//		return  response;
//		// TODO Auto-generated method stub
//		
//	}




	public String update( Long sl_no, String invoice_currency, String cust_payment_terms) throws SQLException {
		// TODO Auto-generated method stub
		String response="{"+"Status"+":"+"True"+"}";
		Connection con = getcon.GetConnection();
		Statement stmt=con.createStatement();
		try {
		
		String query="UPDATE winter_internship SET invoice_currency="+invoice_currency+",cust_payment_terms="+cust_payment_terms+" where sl_no ="+ sl_no;
		
		if(stmt.executeUpdate(query)>0)
			System.out.println("updated");
			return response;
		}
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		stmt.close();
		con.close();
		response="{"+"Status"+":"+"False"+"}";
		
		return  response;
		
	}


	public String searchInvoice(String doc_id,String invoice_id,String buisness_year, String cust_number)throws SQLException {
	
		ArrayList<Invoice> invoices_list = new ArrayList<Invoice>();
		Connection con = getcon.GetConnection();
		Statement stmt=con.createStatement();
		//String names="Sl_no,business_code,cust_number ,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,invoice_id,cust_payment_terms";
		//String query = "SELECT " +names+" from winter_internship where cust_number= "+cust_number +" AND buisness_year = "+buisness_year;
		
		//String query ="SELECT b.name_customer as name_customer, a.* from winter_internship a right join customer b on a.cust_number = b.cust_number where a.doc_id ="+doc_id +" AND  ; 
		
		String where="";
		if(doc_id!=null)
		{
			where =" a.doc_id = '" + doc_id +"' AND ";
		}
		if(invoice_id!=null)
		{
			where=where +"a.invoice_id ="+ invoice_id + " AND "; 
		}
		if(buisness_year!=null)
		{
			where=where+"a.buisness_year = '"+ buisness_year + "' AND " ;
		}
		if(cust_number!=null)
		{
			where=where+"a.cust_number =" + cust_number + " AND " ; 
		}
		
		String query ="SELECT a.* from winter_internship a where " +where +  " is_deleted=0 limit 20"   ;
		
		
		
		System.out.println(query);
		ResultSet rs=stmt.executeQuery(query);

		while(rs.next()) 
		{
			Invoice inv = new Invoice();			
			inv.setSerial_no(rs.getInt("sl_no"));
			inv.setBusiness_code(rs.getString("business_code"));
			inv.setCustomer_number(rs.getString("cust_number"));
			inv.setClear_date(rs.getString("clear_date"));
			inv.setBusiness_year(rs.getString("buisness_year"));
			inv.setdoc_id(rs.getString("doc_id"));
			inv.setPosting_date(rs.getString("posting_date"));
			inv.setDoc_create_date(rs.getString("document_create_date"));
			inv.setDue_date(rs.getString("due_in_date"));
			inv.setInvoice_currency(rs.getString("invoice_currency"));
			inv.setDoc_type(rs.getString("document_type"));	
			inv.setPosting_id(rs.getInt("posting_id"));
			inv.setTotal_open_amount(rs.getString("total_open_amount"));
			inv.setBaseline_payment_date(rs.getString("baseline_create_date"));	
			inv.setcust_payment_terms(rs.getString("cust_payment_terms"));
			inv.setinvoice_id(rs.getString("invoice_id"));	
			invoices_list.add(inv);
		}
		Gson gson = new GsonBuilder().serializeNulls().create();

		String jsonInvoiceList = gson.toJson(invoices_list);
		
		
		stmt.close();
		con.close();
		return jsonInvoiceList;
	}


	public String addInvoice(HashMap<String, String> map) throws SQLException {
		
		System.out.println(map);
		ArrayList<String> keys = new ArrayList<String>(
		          Arrays.asList("business_code","cust_number","clear_date","buisness_year","doc_id","posting_date","document_create_date","due_in_date","invoice_currency","document_type","posting_id","total_open_amount","baseline_create_date","invoice_id","cust_payment_terms"));
		String names="";
		String value="";
				
		String response="{"+"Status"+":"+"True"+"}";
		Connection con = getcon.GetConnection();
		Statement stmt=con.createStatement();
		
		
		 	for (HashMap.Entry<String, String> entry : map.entrySet()) {
		        if (keys.contains(entry.getKey())) {
		        names+=  entry.getKey() +   ",";
		        value+= "'"+ entry.getValue() +"',";
		        }
		      }
		 	names=names.substring(0, names.length() - 1);
		 	value=value.substring(0, value.length() - 1);
			String sql="INSERT INTO winter_internship ("+names+")"+ "VALUES("+value+")";
		 	
		System.out.println(sql);
		if(stmt.executeUpdate(sql)>0) {
			System.out.println("INSERTED");
			return response;
		}
		
		
		
	response="{"+"Status"+":"+"False"+"}";
		
		
		return  response;
	}

}

