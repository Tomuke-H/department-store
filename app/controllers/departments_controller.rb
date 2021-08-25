class DepartmentsController < ApplicationController

    def index
        render component: "Departments"
    end

end
