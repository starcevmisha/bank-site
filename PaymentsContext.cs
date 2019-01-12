using bank_site.Models;
using Microsoft.EntityFrameworkCore;

namespace bank_site
{
    public class PaymentsContext : DbContext
    {
        public DbSet<CardPayment> Payments { get; set; }
        public DbSet<PaymentRequestModel> Requests { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=payments.db");
        }
    }
}