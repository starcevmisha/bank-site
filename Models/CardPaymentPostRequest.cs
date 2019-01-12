namespace bank_site.Models
{
    public class CardPaymentPostRequest
    {
        public string creditCard { get; set; }
        public string expirationDate { get; set; }
        public string cvc { get; set; }
        public string comment { get; set; }
        public string sum { get; set; }
        public string email { get; set; }
    }
}