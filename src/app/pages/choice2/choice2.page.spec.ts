import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Choice2Page } from './choice2.page';

describe('Choice2Page', () => {
  let component: Choice2Page;
  let fixture: ComponentFixture<Choice2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Choice2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Choice2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
