from django.utils.decorators import method_decorator
from django.views import View
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, JsonResponse
import json
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle
from .models import Members

def LoginView(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            token = 'token123'
            permissions = user.get_all_permissions()
            return JsonResponse({
                    'token': token,
                    'admin': user.is_superuser,
                    'permissions': list(permissions)})
        else:
            return JsonResponse({'error': 'Invalid username or password'}, status=400)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)

def AddMember(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            designation = data.get('designation')
            status = data.get('status')
            country = data.get('country')

            member = Members(name=name, email=email, designation=designation, status=status, country=country)
            member.save()

            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    else:
        return JsonResponse({'error': 'Only POST requests are allowed'})

def GetData(request):
    data = Members.objects.all().values()
    return JsonResponse(list(data), safe=False)
def generate_pdf(request):
    if request.method == 'POST':
        try:
            data_dict = json.loads(request.body.decode('utf-8'))
            data = json.loads(data_dict.get('data', '[]'))

            response = HttpResponse(content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="user_list.pdf"'

            p = canvas.Canvas(response)
            p.drawString(100, 800, "List of Members")

            
            table_data = [['Name', 'Email', 'Designation', 'Country', 'Status']]
            for user in data:
                table_data.append([user['name'], user['email'], user['designation'], user['country'], user['status']])

            
            style = TableStyle([
                ('BACKGROUND', (0, 0), (-1, 0), '#5187fd'),
                ('TEXTCOLOR', (0, 0), (-1, 0), 'white'),
                ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
                ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
                ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
                ('BACKGROUND', (0, 1), (-1, -1), '#dae4fe'),
                ('TEXTCOLOR', (0, 0), (-1, 0), 'black'),
                ('GRID', (0, 0), (-1, -1), 1, 'black')
            ])

            
            table = Table(table_data)
            table.setStyle(style)

            
            table.wrapOn(p, 0, 0)
            table.drawOn(p, 100, 600)

            p.showPage()
            p.save()

            return response
        except Exception as e:
            print(e)  
            return JsonResponse({'error': 'Failed to generate PDF'}, status=500)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)