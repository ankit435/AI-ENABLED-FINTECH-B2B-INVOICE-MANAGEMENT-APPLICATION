package com.HRC.web.model;

public class Invoice {
	
	public int getSerial_no() {
		return sl_no;
	}
	public void setSerial_no(int serial_no) {
		this.sl_no = serial_no;
	}
	public String getBusiness_code() {
		return business_code;
	}	
	public void setBusiness_code(String business_code){
		this.business_code=business_code;
	}
	
	public String getCustomer_number() {
		return cust_number;
	}
	public void setCustomer_number(String customer_number) {
		this.cust_number = customer_number;
	}
	
	public String getClear_date() {
		return clear_date;
	}
	public void setClear_date(String clear_date){
		this.clear_date=clear_date;
	}
	
	public String getBusiness_year() {
		return buisness_year;
	}
	public void setBusiness_year(String buisness_year){
		this.buisness_year=buisness_year;
	}
	
	public String getdoc_id() {
		return doc_id;
	}
	public void setdoc_id(String doc_id){
		this.doc_id=doc_id;
	}
	
	public String getPosting_date() {
		return posting_date;
	}
	public void setPosting_date(String posting_date){
		this.posting_date=posting_date;
	}
	
	public String Detdoc_create_date() {
		return document_create_date;
	}
	public void setDoc_create_date(String document_create_date){
		this.document_create_date=document_create_date;
	}
	
	public String getDue_date() {
		return due_in_date;
	}
	public void setDue_date(String due_in_date) {
		this.due_in_date = due_in_date;
	}

	public String getInvoice_currency() {
		return invoice_currency;
	}
	public void setInvoice_currency(String invoice_currency) {
		this.invoice_currency = invoice_currency;
	}
	
	public String getDoc_type() {
		return document_type;
	}
	public void setDoc_type(String document_type) {
		this.document_type = document_type;
	}
	
	public int setPosting_id(){
		return posting_id;
	}
	
	
	public void setPosting_id(int posting_id){
		this.posting_id=posting_id;
	}
	
	public String getTotal_open_amount() {
		return total_open_amount;
	}
	public void setTotal_open_amount(String total_open_amount) {
		this.total_open_amount = total_open_amount;
	}
	

	public String getBaseline_payment_date() {
		return baseline_create_date;
	}
	public void setBaseline_payment_date(String baseline_create_date) {
		this.baseline_create_date = baseline_create_date;
	}


	
	public String getcust_payment_terms() {
		return cust_payment_terms;
	}
	public void setcust_payment_terms(String cust_payment_terms) {
		this.cust_payment_terms = cust_payment_terms;
	}
	

	public String getinvoice_id() {
		return invoice_id;
	}
	public void setinvoice_id(String invoice_id) {
		this.invoice_id = invoice_id;
	}
	
	int sl_no;

	String business_code;

	String cust_number;

	String clear_date;

	String buisness_year;

	String doc_id;

	String posting_date;

	String document_create_date;

	String due_in_date;

	String invoice_currency;

	String document_type;

	int posting_id;

	String total_open_amount;

	String baseline_create_date;
	
	String invoice_id;
	String cust_payment_terms;

	
	
	
}
