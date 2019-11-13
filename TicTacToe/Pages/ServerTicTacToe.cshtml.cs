using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TicTacToe.Pages
{
    public class ServerTicTacToeModel : PageModel
    {
        public char[,] State { get; } = new char[3, 3];

        public char Turn { get; set; } = 'X';

        public void OnGet()
        {
            if (Request.HasFormContentType)
            {
                string move = Request.Form["move"];
                string[] parts = move.Split("-");
                char turn = char.Parse(parts[0]);
                int x = int.Parse(parts[1]);
                int y = int.Parse(parts[2]);
                State[x, y] = turn;
            }
        }
    }
}