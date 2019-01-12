namespace bank_site.Models
{
    public class OwnBankPaymentRequest
    {
        public string From { get; set; }
        public string Bik { get; set; }
        public string AccountNumber { get; set; }
        public string Amount { get; set; }
        public string Purpose { get; set; }
    }
}