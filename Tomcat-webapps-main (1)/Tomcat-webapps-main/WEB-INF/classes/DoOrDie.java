import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/deathWish")
public class DoOrDie extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        String title = "Your Life Span";
        String name = request.getParameter("name");
        String age = request.getParameter("age");
        String gender = request.getParameter("gender");
        String[] food = request.getParameterValues("food");

        Object[][] foodValues = {
            {"Fried Chicken", 4, 4},
            {"Idly", 2, 5},
            {"Dosai", 2, 6},
            {"SugaryCereals", 4, 8},
            {"Pizza", 3, 5}
        };
        
        int totalToxicity = 0;
        int totalEnergy = 0;

        if (food != null) {
            for (String selectedFood : food) {
                for (Object[] item : foodValues) {
                    if (item[0].equals(selectedFood)) {
                        totalToxicity += (int)item[1];
                        totalEnergy += (int)item[2];
                        break;
                    }
                }
            }
        }

        int A = Integer.parseInt(age);
        int G = "Male".equals(gender) ? 1 : 2; // Male = 1, Female = 2
        double expectedLifespan;
        if (A > 65) {
            expectedLifespan = A;  // No additional calculation if age > 65
        } else {
            expectedLifespan = (65 - A) * (1 - (totalToxicity / 50.0)) + (totalEnergy / 2.0 * G / 2.0) + A;
        }

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        out.println("<html><head><title>" + title + "</title>");
        out.println("<style>");
        out.println("body { text-align: center; font-family: Arial, sans-serif; }");
        out.println(".lifespan-counter { font-size: 24px; margin-top: 20px; }");
        out.println(".name-display { font-size: 36px; font-weight: bold; margin-bottom: 30px; }");
        out.println("</style>");
        out.println("</head><body>");

        out.println("<div class='name-display'>Hello " + name + "!</div>");
        
        out.println("<div class='lifespan-counter'>Your predicted lifespan is: " + (int)expectedLifespan + " years</div>");

        out.println("</body></html>");
    }
}
