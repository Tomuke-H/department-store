class DepartmentsController < ApplicationController
    before_action :set_dep, only:[:show, :edit, :update, :destroy]
    def index
        render component: "Deps", props: {deps: Department.all}
    end

    def show
        render component: "Dep", props: {dep: @dep, items: @dep.items}
    end

    def new
        render component: "DepNew"
    end

    def create
        dep = Department.new(dep_params)
        if(dep.save)
            redirect_to root_path
        end
    end

    def edit
        render component: "DepEdit", props: {dep: @dep}
    end

    def update
        if(@dep.update(dep_params))
            redirect_to root_path
        end
    end

    def destroy
        @dep.destroy
        redirect_to root_path
    end


    private

    def dep_params
        params.require(:department).permit(:name)
    end

    def set_dep
        @dep = Department.find(params[:id])
    end
end
