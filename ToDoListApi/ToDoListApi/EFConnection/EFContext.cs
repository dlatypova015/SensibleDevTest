using Microsoft.EntityFrameworkCore;
using ToDoListApi.Models;

namespace ToDoListApi
{
    public class EFContext: DbContext
    {
        public EFContext(DbContextOptions<EFContext> options):base(options) { }
        public DbSet<CaseTable> CaseTable { get; set; }
    }
}
