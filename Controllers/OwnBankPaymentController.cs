using System;
using System.IO;
using bank_site.Models;
using Microsoft.AspNetCore.Mvc;
using TemplateEngine.Docx;

namespace bank_site.Controllers
{
    [Route("/api/[controller]")]
    public class OwnBankPaymentController : Controller
    {
        [HttpPost("[action]")]
        public FileResult  Post([FromForm] OwnBankPaymentRequest ownBankPayment)
        {
            
            System.IO.File.Delete("OutputDocument.docx");
            System.IO.File.Copy("Templates\\Платежка.docx", "OutputDocument.docx");
		
            var valuesToFill = new Content(
                new FieldContent("Date", DateTime.Now.ToString("dd/MM/yyyy")),
                new FieldContent("Amount", ownBankPayment.Amount),
                new FieldContent("Bik", ownBankPayment.Bik),
                new FieldContent("AccountNumber", ownBankPayment.AccountNumber),
                new FieldContent("From", ownBankPayment.From),
                new FieldContent("Purpose", ownBankPayment.Purpose)
                );

            using(var outputDocument = new TemplateProcessor("OutputDocument.docx")
                .SetRemoveContentControls(true))
            {
                outputDocument.FillContent(valuesToFill);
                outputDocument.SaveChanges();
            } 
            
            
            
            
            Console.WriteLine(Directory.GetCurrentDirectory());
            var content = new FileStream("OutputDocument.docx",
                FileMode.Open, FileAccess.Read, FileShare.Read);
            var response = File(content, "application/blob", "13.zip");
            return response;
        }
    }
}