using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MailKit.Net.Smtp;
using MimeKit;
using Newtonsoft.Json;

namespace opg_dario.Controllers
{
    [Route("api/[controller]")]
    public class EmailController : Controller
    {
        [HttpPost("[action]")]
        public void SendEmail([FromBody]Email email)
        {
            
            MimeMessage message = new MimeMessage();

            //webpage admin that sends the email
            MailboxAddress from = new MailboxAddress("narudzba@farmapuzeva-opgalmasi.hr");
            message.From.Add(from);

            //email reciever
            MailboxAddress to = new MailboxAddress("Matija", "matija@matijaalmasi.com");
            message.To.Add(to);

            message.Subject = email.senderSubject;

            message.ReplyTo.Add(new MailboxAddress(email.senderName, email.senderEmail));

            BodyBuilder bodyBuilder = new BodyBuilder
            {
                HtmlBody = email.senderMessage
            };
            message.Body = bodyBuilder.ToMessageBody();

            SmtpClient client = new SmtpClient();
            client.Connect("mboxhosting.com", 465, true);
            client.Authenticate("narudzba@farmapuzeva-opgalmasi.hr", "ovoJeJakoSigurnaLozinka1");

            client.Send(message);
            client.Disconnect(true);
            client.Dispose();
        }

        public class Email
        {
            public string senderName { get; set; }
            public string senderEmail { get; set; }
            public string senderSubject { get; set; }
            public string senderMessage { get; set; }
        }
    }
}